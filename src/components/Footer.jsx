import wechat from '../images/wechat.jpg'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2 items-center">
          <img className="h-28 rounded shadow-lg" src={wechat} alt="WeChat" />
          <p className="text-sm leading-5 text-gray-500">
            添加微信获取最新资讯
            <br />
            <br />
            热线：400-834-6186
          </p>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 善为（北京）健康管理有限公司, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
