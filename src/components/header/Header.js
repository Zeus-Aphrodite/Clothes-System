import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleBtnCart, toggleSearchForm } from "../../redux/products/products.slice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { CartShopping } from "../cart-shopping/CartShopping"
import { Search } from "../search/Search"

export function Header() {
    const { cart, btnCart } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const toggleCart = () => dispatch(toggleBtnCart(true))
    const toggleSearch = () => dispatch(toggleSearchForm(true))

    btnCart
        ? document.querySelector('body').style.overflow = 'hidden'
        : document.querySelector('body').style.overflow = 'visible'

    return (
        <header className='w-screen bg-[#221f1f] fixed z-10 top-0 '>
            <div>
                <div className='container text-lg flex justify-between items-center text-white  max-w-[1240px] m-auto px-2'>
                    <a href='/' >Cloth Shop</a>
                    <Search />
                    <ul className='flex justify-between'>
                        <button className='block md:hidden mr-2 px-[8px]' onClick={toggleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <li className='mr-2 px-[8px] py-1 rounded hover:bg-gray-600 transition cursor-not-allowed md:mr-4'>
                            <FontAwesomeIcon icon={faUser} className='text-xl' />マイページ*ログイン
                        </li>
                        <button className='px-[6px] py-1 rounded hover:bg-gray-600 transition relative' onClick={toggleCart}>
                            <FontAwesomeIcon icon={faCartShopping} className='text-xl' /> 買い物カゴを見る
                            {cart.length > 0 && <span className='absolute right-[-7px] top-0 bg-[#00a046] text-[12px] h-[10px] flex items-center justify-center px-[7px] py-[10px] rounded-full'>{cart.length}</span>}
                        </button>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#252526] text-[22px] text-white px-10 py-2">
                        初めての方へ
                    </button>
                    <button className="bg-[#252526] text-[22px] text-white px-10 py-2">
                        留袖一覧
                    </button>
                    <button className="bg-[#252526] text-[22px] text-white px-10 py-2">
                        よくあるご質問
                    </button>
                    <button className="bg-[#252526] text-[22px] text-white px-10 py-2">
                        お客様の声
                    </button>
                    <button className="bg-[#252526] text-[22px] text-white px-10 py-2">
                        買い物カゴを見る
                    </button>
                </div>
            </div>

            {btnCart && <CartShopping cart={cart} />}
        </header>
    )
}
