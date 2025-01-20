import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }

  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
      applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Catering'} onChange={toggleCategory}/> Catering
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Mandapam'} onChange={toggleCategory}/> Mandapam
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Photography'} onChange={toggleCategory}/> Photography
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Makeup'} onChange={toggleCategory}/> Makeup
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Stage Decoration'} onChange={toggleCategory}/> Stage Decoration
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Panthal Decoration'} onChange={toggleCategory}/> Panthal Decoration
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Music and Entertainment'} onChange={toggleCategory}/> Music and Entertainment
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Transportation'} onChange={toggleCategory}/> Transportation
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Accommodation'} onChange={toggleCategory}/> Accommodation
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Wedding Invitations'} onChange={toggleCategory}/> Wedding Invitations
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Wedding Cakes'} onChange={toggleCategory}/> Wedding Cakes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={' Lighting and Sound'} onChange={toggleCategory}/>  Lighting and Sound
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUB CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Tamil Cuisine'} onChange={toggleSubCategory}/> Tamil Cuisine, North Indian, South Indian, Chinese
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Indoor'} onChange={toggleSubCategory}/> Indoor, Outdoor, AC, Non-AC
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Candid'} onChange={toggleSubCategory}/> Candid, Traditional, Drone, Videography
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bridal makeup'} onChange={toggleSubCategory}/>Bridal makeup, Groom makeup, Party makeup
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Floral'} onChange={toggleSubCategory}/> Floral, Balloon, Fabric, Lighting 
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Traditional'} onChange={toggleSubCategory}/> Traditional, Modern, Floral, Greenery 
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Live bands'} onChange={toggleSubCategory}/> Live bands, DJs, Emcees, Dancers 
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Decorated vehicles'} onChange={toggleSubCategory}/> Decorated vehicles, Chauffeur services
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Hotel bookings'} onChange={toggleSubCategory}/> Hotel bookings, Resort bookings, Home stays
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Digital invitations'} onChange={toggleSubCategory}/> Digital invitations, Paper invitations, Customized invitations
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Traditional'} onChange={toggleSubCategory}/> Traditional, Modern, Customized designs 
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'LED lights'} onChange={toggleSubCategory}/> LED lights, String lights, Sound systems 
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Porduct Sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
