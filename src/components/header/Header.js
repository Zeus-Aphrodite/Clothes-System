import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleBtnCart } from "../../redux/products/products.slice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { CartShopping } from "../cart-shopping/CartShopping"

import Myline from '../../assets/Header/Line.png'
import Myphoto from '../../assets/Header/Photo.png'
import Mycart from '../../assets/Header/cart.png'
// import { Search } from "../search/Search"

export function Header() {
    const { cart, btnCart } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const toggleCart = () => dispatch(toggleBtnCart(true))
    // const toggleSearch = () => dispatch(toggleSearchForm(true))

    btnCart
        ? document.querySelector('body').style.overflow = 'hidden'
        : document.querySelector('body').style.overflow = 'visible'

    return (
        <header className='w-screen bg-[#fffffs] z-10 top-0 '>
            <div>
                <div>
                    <p className="text-xs">
                        黒留袖 留袖専門レンタルショップ和匠は、 着物職人が選び抜いた、 京友禅や丹後ちりめんなどの高級感あふれる品を取り揃えています
                    </p>
                </div>
                <div className='text-lg flex justify-between items-center text-white m-auto px-8'>
                    {/* <a href='/' >Cloth Shop</a> */}
                    {/* <Search /> */}
                    <div className="">
                        <p className="text-black">
                            京都黒留袖専門レンタルショップ
                        </p>
                        <img src={Mycart} />
                    </div>
                    <div>
                        <img src={Myline} />
                    </div>
                    <div>
                        <img src={Myphoto} />
                    </div>
                    <div>
                        <p className="text-[#9b7d5f]">
                            全国往復
                        </p>
                        <p className="text-[#9b7d5f]">
                            送料無料
                        </p>
                        <p className="text-[#9b7d5f]">
                            ※一部を除く
                        </p>
                    </div>
                    <div>
                        <p className="text-[#b15f5e]">
                            安心保險
                        </p>
                        <p className="text-[#9b7d5f]">
                            汚してしまっても
                        </p>
                        <p className="text-[#9b7d5f]">
                            安心の制度です
                        </p>
                    </div>
                    <div>
                        <p className="text-black">
                            最高級オリジナル黒留袖をお値打ち価格で
                        </p>
                        <p className="text-[#785c15] text-5xl">
                            C075-756-8774
                        </p>
                        <p className="text-black">
                            営業時間 10:00~18:00 (定休日:火・水)
                        </p>
                    </div>
                    <ul className=''>
                        {/* <button className='block md:hidden mr-2 px-[8px]' onClick={toggleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button> */}
                        <li className='mr-2 px-[8px] py-1 rounded hover:bg-gray-600 transition cursor-not-allowed md:mr-4 bg-[#9d751a] w-[210px] mb-1 mt-10'>
                            <FontAwesomeIcon icon={faUser} className='text-xl' />マイページ*ログイン
                        </li>
                        <button className='px-[6px] py-1 rounded hover:bg-gray-600 transition relative bg-[#9d751a] w-[210px] mb-3' onClick={toggleCart}>
                            <FontAwesomeIcon icon={faCartShopping} className='text-xl' /> 買い物カゴを見る
                            {cart.length > 0 && <span className='absolute right-[-7px] top-0 bg-[#00a046] text-[12px] h-[10px] flex items-center justify-center px-[7px] py-[10px] rounded-full'>{cart.length}</span>}
                        </button>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#252526] text-[22px] text-white px-16 py-2">
                        初めての方へ
                    </button>
                    <button className="bg-[#252526] text-[22px] text-white px-16 py-2">
                        留袖一覧
                    </button>
                    <button className="bg-[#252526] text-[22px] text-white px-16 py-2">
                        よくあるご質問
                    </button>
                    <button className="bg-[#252526] text-[22px] text-white px-16 py-2">
                        お客様の声
                    </button>
                    <button className="bg-[#252526] text-[22px] text-white px-16 py-2">
                        買い物カゴを見る
                    </button>
                </div>
            </div>

            {btnCart && <CartShopping cart={cart} />}
        </header>
    )
}
