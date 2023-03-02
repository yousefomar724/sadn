const Search = () => {
  const handleSubmit = (e) => {
    console.log(e)
  }
  return (
    <form
      className='flex items-center justify-center py-10 gap-4 max-w-xl mx-auto'
      dir='rtl'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='search'
        placeholder='ابحث عن إذاعة'
        className='outline-none w-full py-2 px-4 border border-primary-900 rounded-xl text-lg'
      />
      <button className='bg-primary-900 text-white py-2 px-6 hover:bg-primary-800 transition rounded-xl text-lg font-medium'>
        ابحث
      </button>
    </form>
  )
}

export default Search
