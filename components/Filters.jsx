import { MdOutlineCategory } from 'react-icons/md'

const Filters = () => {
  return (
    <div className='basis-1/4 sticky top-10 h-fit flex flex-col gap-6'>
      <div className='flex items-center justify-center gap-2'>
        <MdOutlineCategory className='text-3xl text-primary-900' />
        <h3 className='text-2xl md:text-3xl font-bold text-center font-light'>
          تصنيفات
        </h3>
      </div>
      <fieldset className='flex flex-wrap gap-3'>
        <div>
          <input
            type='radio'
            name='radio'
            value='all'
            id='all'
            className='peer hidden'
            defaultChecked
          />
          <label
            for='all'
            className='flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white'
          >
            <p className='font-medium'>الكل</p>
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='radio'
            value='askar'
            id='askar'
            className='peer hidden'
          />

          <label
            for='askar'
            className='flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white'
          >
            <p className='font-medium'>أذكار</p>
          </label>
        </div>

        <div>
          <input
            type='radio'
            name='radio'
            value='random'
            id='random'
            className='peer hidden'
          />

          <label
            for='random'
            className='flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white'
          >
            <p className='font-medium'>منوعات</p>
          </label>
        </div>

        <div>
          <input
            type='radio'
            name='radio'
            value='tafser'
            id='tafser'
            className='peer hidden'
          />

          <label
            for='tafser'
            className='flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white'
          >
            <p className='font-medium'>تفسير</p>
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='radio'
            value='reciters'
            id='reciters'
            className='peer hidden'
          />

          <label
            for='reciters'
            className='flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white'
          >
            <p className='font-medium'>قراء</p>
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default Filters
