import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FloatingActionButton() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [showAiChat, setShowAiChat] = useState(false)
  const [aiMessages, setAiMessages] = useState([])
  const [aiInput, setAiInput] = useState('')
  const [isAiTyping, setIsAiTyping] = useState(false)
  const hoverTimeoutRef = useRef(null)
  const menuRef = useRef(null)

  // Contact information
  const contactInfo = {
    phone: "+233256073041",
    whatsapp: "233256073041",
    email: "info@agedgeglobal.com"
  }

  // Handle hover to show menu (stays open)
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsOpen(true)
  }

  // Handle mouse leave - but don't close if clicking inside menu
  const handleMouseLeave = () => {
    // Don't auto-close on leave - menu stays open until X is clicked
    // We keep it open
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        const button = document.getElementById('dancing-button')
        if (button && !button.contains(event.target)) {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Dancing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const button = document.getElementById('dancing-button')
      if (button && !isOpen) {
        button.classList.add('animate-dance')
        setTimeout(() => {
          button.classList.remove('animate-dance')
        }, 500)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isOpen])

  // Pre-defined AI responses for common questions
  const aiResponses = {
    greeting: "Hello! I'm AGEdge AI Assistant. How can I help you today?",
    services: "We offer Architecture Design, Construction, Materials Supply, and Real Estate Development. Which service are you interested in?",
    pricing: "Our pricing varies based on project scope. I recommend booking a free consultation with our team for an accurate quote. Would you like me to help schedule that? (Type 'yes' to continue)",
    timeline: "Project timelines typically range from 3-12 months depending on complexity. Would you like to schedule a consultation to discuss your specific project? (Type 'yes' to continue)",
    contact: `You can reach us at ${contactInfo.phone} or email ${contactInfo.email}. Our office hours are Monday-Saturday, 8AM-6PM. Would you like to schedule a consultation? (Type 'yes' to continue)`,
    location: "We're located at Number 1 Beige Street, Azumah, New Weija, Accra. GPS: GS-0065-2998. Would you like to book a visit? (Type 'yes' to continue)",
    portfolio: "We've completed over 50 projects including private residences, educational facilities, and commercial buildings. Would you like to see our portfolio? (Type 'yes' to continue)",
    default: "Thank you for your question. Would you like to schedule a free consultation with our team? (Type 'yes' to continue)"
  }

  // Simple AI response logic
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim()
    
    if (message === 'yes' || message === 'yeah' || message === 'yep' || message === 'sure' || message === 'ok' || message === 'okay') {
      return { type: 'redirect', content: "Great! I'll take you to our contact page so you can schedule a consultation with our team." }
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return { type: 'message', content: aiResponses.greeting }
    } else if (message.includes('service') || message.includes('do you do') || message.includes('offer')) {
      return { type: 'message', content: aiResponses.services }
    } else if (message.includes('price') || message.includes('cost') || message.includes('quote') || message.includes('budget')) {
      return { type: 'message', content: aiResponses.pricing }
    } else if (message.includes('time') || message.includes('duration') || message.includes('how long')) {
      return { type: 'message', content: aiResponses.timeline }
    } else if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return { type: 'message', content: aiResponses.contact }
    } else if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return { type: 'message', content: aiResponses.location }
    } else if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return { type: 'message', content: aiResponses.portfolio }
    } else {
      return { type: 'message', content: aiResponses.default }
    }
  }

  const handleAISubmit = (e) => {
    e.preventDefault()
    if (!aiInput.trim()) return

    const userMessage = { role: 'user', content: aiInput }
    setAiMessages(prev => [...prev, userMessage])
    setAiInput('')
    setIsAiTyping(true)

    setTimeout(() => {
      const response = getAIResponse(aiInput)
      const aiMessage = { role: 'assistant', content: response.content, type: response.type }
      setAiMessages(prev => [...prev, aiMessage])
      setIsAiTyping(false)
    }, 1000)
  }

  const startAIChat = () => {
    setShowAiChat(true)
    if (aiMessages.length === 0) {
      setAiMessages([{ role: 'assistant', content: aiResponses.greeting, type: 'message' }])
    }
  }

  const handleRedirectToContact = () => {
    setShowAiChat(false)
    navigate('/contact')
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button Container */}
      <div 
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={handleMouseEnter}
      >
        <button
          id="dancing-button"
          className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center group hover:scale-110"
          style={{
            boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)'
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>

        {/* Menu Popup - Cute Compact Design */}
        {isOpen && (
          <div 
            ref={menuRef}
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up"
            style={{ width: '220px' }}
            onMouseLeave={handleMouseLeave}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-500 to-green-600">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">Quick Actions</span>
              </div>
              <button
                onClick={closeMenu}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-2 space-y-1">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group hover:bg-green-50"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <svg className="w-4 h-4 text-green-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.576 2.052.884 3.149.885 3.181 0 5.768-2.587 5.768-5.766-.001-3.18-2.587-5.727-5.768-5.727zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.062-.386-.126-.852-.37-1.474-.934-1.002-.91-1.759-1.999-1.998-2.683-.12-.343-.149-.594-.087-.811.06-.201.242-.384.36-.508.118-.123.209-.267.246-.43.037-.162-.006-.342-.115-.506-.11-.164-.754-1.884-.998-2.184-.248-.304-.523-.367-.738-.367h-.593c-.21 0-.552.079-.84.396-.288.317-1.1 1.075-1.1 2.624 0 1.549 1.125 3.043 1.281 3.254.157.211 2.165 3.395 5.288 4.634 3.124 1.239 3.124.825 3.687.773.564-.052 1.273-.521 1.452-1.023.179-.502.179-.931.126-1.022-.053-.091-.207-.146-.433-.248-.226-.103-1.088-.537-1.257-.599-.168-.061-.29-.092-.413.092-.123.184-.474.599-.582.723-.107.124-.215.14-.401.047-.186-.093-.783-.289-1.491-.921-.562-.502-.94-1.117-1.051-1.305-.111-.188-.012-.289.084-.385.086-.087.192-.226.288-.339.096-.113.128-.188.193-.314.064-.126.032-.236-.016-.329-.048-.093-.413-.996-.566-1.364-.148-.356-.299-.308-.413-.314-.106-.005-.227-.006-.348-.006-.12 0-.316.045-.48.226-.165.181-.629.615-.629 1.5 0 .886.644 1.741.734 1.861.09.12 1.266 1.932 3.066 2.708 1.8.776 1.8.517 2.124.485.324-.032 1.045-.427 1.193-.839.148-.412.148-.765.104-.837-.044-.072-.148-.12-.316-.207z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">WhatsApp</p>
                  <p className="text-xs text-gray-400">Chat with us</p>
                </div>
              </a>

              {/* Call */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group hover:bg-blue-50"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg className="w-4 h-4 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Call Us</p>
                  <p className="text-xs text-gray-400">Speak to an expert</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group hover:bg-purple-50"
              >
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <svg className="w-4 h-4 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Email Us</p>
                  <p className="text-xs text-gray-400">info@agedgeglobal.com</p>
                </div>
              </a>

              {/* AI Assistant */}
              <button
                onClick={startAIChat}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group hover:bg-green-50"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <svg className="w-4 h-4 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">AI Assistant</p>
                  <p className="text-xs text-gray-400">Ask me anything</p>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* AI Chat Modal */}
      {showAiChat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md h-[500px] flex flex-col shadow-2xl">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-green-500 to-green-600 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">AGEdge AI Assistant</h3>
                  <p className="text-green-100 text-xs">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setShowAiChat(false)}
                className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {aiMessages.map((msg, idx) => (
                <div key={idx}>
                  <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-green-500 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-700 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                  {msg.type === 'redirect' && (
                    <div className="flex justify-start mt-2">
                      <button
                        onClick={handleRedirectToContact}
                        className="px-4 py-2 bg-green-500 text-white text-sm rounded-xl hover:bg-green-600 transition-colors"
                      >
                        Go to Contact Page →
                      </button>
                    </div>
                  )}
                </div>
              ))}
              {isAiTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-none p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleAISubmit} className="p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
                <button
                  type="submit"
                  disabled={isAiTyping}
                  className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes dance {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg) scale(1.1); }
          50% { transform: rotate(-15deg) scale(1.1); }
          75% { transform: rotate(5deg) scale(1.05); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-dance {
          animation: dance 0.5s ease-in-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  )
}