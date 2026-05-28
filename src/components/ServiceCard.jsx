export default function ServiceCard({ title, description }) {
  return (
    <div className="group p-8 border border-gray-200 rounded-xl hover:border-black hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}