import interview from '../images/interview.jpg'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-lime-600">
                接受采访
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                CCTV 7 节目专访
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                中央电视台农业频道的专访，充分证明了公司在业内的地位和实力。
                经理在专访中阐述了公司的经营理念和发展战略，更加深入地解释了公司的核心竞争力。
              </p>
              <div className="mt-8">
                <Link
                  to="/clients"
                  className="inline-flex rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                >
                  了解更多
                </Link>
              </div>
              <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                <blockquote className="text-base leading-7">
                  <p>
                    “公司将继续秉承专业、创新、诚信的经营理念，不断推动业务发展，为客户提供更好的服务。”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                  <div>
                    <span className="font-semibold text-gray-900">栾婧</span> –
                    总裁
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            src={interview}
            alt="Interview"
            className="w-[33rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[47rem] md:-ml-4 lg:ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default Main
