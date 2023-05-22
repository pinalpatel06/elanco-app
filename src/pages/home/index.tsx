import { FC, useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/solid';

import '../../App.css'
import Navbar from '../../components/navbar'
import { getAppDetail }  from './state/reducer';
import { useAppDispatch } from '../../redux/store';
import { ProductResource } from '../Products/state/model'
import Product from '../../components/product';
import { resource } from './state/model';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: FC = () => {
  const [selected, setSelected] = useState('Select Application');
  const [products, setProducts] = useState([]);
  const productsState = useSelector((state: any) => {
    return  state;
  });


  const dispatch = useAppDispatch()
 
  let onSelect = (item: string) => {
    setSelected(item);
    //Reset data
    const a = {resourceName: item}
    dispatch(getAppDetail(a))
    .unwrap()
    .then((res) => {
          setProducts([]);
          setProducts(res);
        });
  }

  return (
    <div className='overflow relative min-h-[100vh]'>
      <Navbar isHomePage={true} />
      <div className='h-full min-h-[90vh]'>
      {buildInfo(productsState, selected, onSelect)}
      { products ?  buildDetailInfo(products) : ''}
      </div>
    </div>
  )
}

export default Home;

const buildInfo = (info: ProductResource, selected: string, onSelect: any) => {

  if ('isPending' in info.productList) {
    return (
      //Loading Animation
      <svg
        role="status"
        className="mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    )
  } else if ('resource' in info.productList) {
    return (
      //View on successful API call
      <div className="bg-white">
        <div className="mx-auto py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
         
      <Listbox value={selected} onChange={onSelect}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label>
          <div className="relative mt-10">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {info?.productList?.resource.map((product: string, i: number) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={product}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {product}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
        </div>
      </div>
    )
  } else {
    // TODO: Error msg
  }
}

const buildDetailInfo = (products: any) => {
  if(!products || products.length === 0) {
    return;
  }
return (
  <div className="bg-white">
  <div className="mx-auto sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-8">
      {products &&
        products?.map((product: resource, i: number) => (
          <Link key={i + 1} to={`/products/${product.ResourceGroup}`} state={product}>
              <Product product={product} />
          </Link>
        ))}
    </div>
  </div>
</div>
)
}