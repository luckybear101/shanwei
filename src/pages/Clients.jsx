import yan from '../images/1.jpg'
import sp from '../images/2.jpg'
import shun from '../images/3.jpg'
import dong from '../images/4.jpg'
import di from '../images/5.jpg'
import nv from '../images/6.jpg'

const people = [
  {
    name: '癌研有明医院',
    role: '亚洲第一癌症诊疗医院',
    imageUrl: yan,
    bio: '癌研有明医院前身是日本一家医学科研机构的附属医院，这家私立科研机构名字很简单，就叫 がん研究会，中文直译：癌研究会，创建于1908年，是日本第一个专门针对癌症研究和治疗的科研机构。'
  },
  {
    name: '榊原纪念医院',
    role: '亚洲心血管诊疗排名第一',
    imageUrl: sp,
    bio: '日本榊原纪念医院(也叫榊原纪念病院)，位于東京都府中市朝日町,成立于1977年，是亚洲心血管最好的医院，是一家心脏专科医院，在心血管、胸部大动脉瘤等领域在日本乃至亚洲排名第一，它也是世界上为数不多的能进行非体外循环下心脏不停跳冠状动脉搭桥术(OPCABG)的医院。'
  },
  {
    name: '顺天堂医院',
    role: '神经排名第一医院',
    imageUrl: shun,
    bio: '顺天堂医院成立于天保9年（1838年），前身为日本最早引进西方医学的医学私塾。医院成立以来致力于为患者提供安心、安全且先进的医疗服务。我院诚挚欢迎外籍患者（包括不具有日本国民健康保险资格的患者）前来就医。'
  },
  {
    name: '東京大学医学部附属病院',
    role: '日本妇科排名第一医院',
    imageUrl: dong,
    bio: '是东京都文京区本乡七丁目的东京大学医学部附属教学医院。简称东大医院（日语：东大病院）。起源可以追溯到1858年，是支撑起日本近代医学教育的富有历史与传统的医院。至今为止这里培养的优秀医学界人才辈出，为日本的医疗做出不可磨灭的贡献。'
  },
  {
    name: '帝京大学医学部附属病院',
    role: '擅长眼科和肺癌的诊疗',
    imageUrl: di,
    bio: '帝京大学医学部附属医院 TEIKYO UNIVERSITY HOSPITAL，成立于1971年，位于日本东京板桥区，是日本综合性大学，帝京大学医学部体系下最具有代表性的特定功能医院，擅长眼科和肺癌的诊疗。'
  },
  {
    name: '东京女子医科大学附属医院',
    role: '神经外科以及神经科领域佼佼者',
    imageUrl: nv,
    bio: '东京女子医科大学附属医院是东京女子医科大学三所附属医院中最大的一所，也是日本最大的大学医院，共有床位1400余张，并且拥有日本心脏研究所等9个具有高水准的研究所。'
  }

  // More people...
]

export default function Clients() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            我们的合作医院
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            善为健康与日本多家权威综合医院建立了深度合作，能为客户提供更专业有效、更快捷的专家预约。
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map(person => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
