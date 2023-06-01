import a from '../images/a.png'
import b from '../images/b.png'
import c from '../images/c.png'
import d from '../images/d.png'
import e from '../images/e.svg'
import f from '../images/f.png'

export default function Logo() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-gray-400/5 p-8 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={a}
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={b}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={c}
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={d}
              alt="Laravel"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={e}
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={f}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
