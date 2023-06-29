import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div className="bg-gradient-to-t from-white via-fuchsia-200 to-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            准备好了吗？去日本体检和旅行。
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            和家人朋友去旅行的同时，也顺道体验一下高品质的日本体检服务。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/about"
              className="text-sm font-semibold leading-6 text-gray-500"
            >
              了解更多 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
