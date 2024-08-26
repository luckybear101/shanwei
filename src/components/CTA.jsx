import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="custom-gradient"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" offset="0%" />
              <stop stopColor="#FF80B5" offset="100%" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#custom-gradient)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            准备好了吗？去日本体检和旅行。
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            和家人朋友去旅行的同时，也顺道体验一下高品质的日本体检服务。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/about"
              className="inline-flex rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
