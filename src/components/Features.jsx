import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: '医院预约',
    description:
      '我们与多家日本医院合作，可以根据您的需求和偏好为您预约最适合您的医院。',
    icon: CheckCircleIcon
  },
  {
    name: '体检套餐选择',
    description:
      '我们提供多种体检套餐，覆盖面广、项目全面，从基础体检到高端体检，均能满足您的需求。同时，我们也可以根据您的个人情况和需求，为您提供个性化的定制体检套餐。',
    icon: Bars3Icon
  },
  {
    name: '体检报告解读',
    description:
      '我们的医生团队拥有专业的医学背景和经验，能够为您解读体检报告，并提供专业的健康建议和指导，让您更好地了解自己的身体状况，并及时采取相应的措施。',
    icon: QuestionMarkCircleIcon
  },
  {
    name: '后续跟踪服务',
    description:
      '我们的服务不仅仅止于体检，我们还会为您提供后续跟踪服务。如果您有任何身体上的问题，我们会帮助您寻找合适的医院和医生，并跟进您的治疗进程，让您的健康得到更好的保障。',
    icon: UserGroupIcon
  }
]
function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-lime-600">
            快速预约
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            让您省心的一站式体检服务
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            当今社会，身体健康是每个人都十分关注的话题。而体检是维护身体健康的一种重要方式。为了让您省心、舒心地进行体检，我们提供一站式体检服务，具体包括：
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map(feature => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Features
