import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: '需要提前多久预约体检？',
    answer:
      '考虑到签证、旅行安排、前期问诊材料国际快递等因素，大约需提前1-2个月预约和准备。'
  },
  {
    question: '是否可以自由定制日本体检的项目？',
    answer:
      '在标准的基础检查项目之上，用户可根据自身需要，定制高级检查项目，如核磁共振、胸腹部CT、消化道内窥镜、肿瘤标志物筛、各部位B超、动脉硬化、肝硬度等。'
  },
  {
    question: '赴日体检需要提供哪些资料？',
    answer:
      '您需要提供有效的护照、只需要办理个人旅游签证，无需办理医疗签证。医疗签证手续复杂，与旅行签证的主要区别就是在日本可以停留时间较长。'
  },
  {
    question: '日本体检的优势在哪儿？',
    answer:
      '优势主要体现在三个方面：一是环境比国内好，二是服务质量比国内好，三是服务更加严谨。国内医院由于患者人数众多，医院经常是十分拥挤、嘈杂，环境十分差。而且患者人数一多，医护人员的服务质量也就会降低。'
  },
  {
    question: '日本体检套餐是否包含签证？',
    answer:
      '目前日本体检套餐内不包含签证代办服务.由于日本签证需要到申请人常驻地领区办理，并且需要通过类似旅行社资质的代办机构向日本大使馆提交，其实用户在自己所在地办理会更方便。'
  },
  {
    question: '赴日体检期间需要安排住宿吗？',
    answer:
      '是的，我们为您提供酒店预订服务，或者根据您的需求推荐适合的住宿地点，并且可以制定附近的旅游线路 。'
  }
  // More questions...
]

function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            常见问题解答
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <Disclosure as="div" defaultOpen={index === 0 ? true : false}>
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel
                        as="dd"
                        className="mt-2 pr-12"
                        open={open}
                      >
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default About
