import React, { useState } from 'react'
import { BsFillPlusSquareFill, BsSearch } from 'react-icons/bs'
import Navbar from 'react-bootstrap/Navbar'
import { FcSearch } from 'react-icons/fc'
export interface IMenubarProps {}

export default function Menubar(props: IMenubarProps) {
  const [isVisibleSearchMenu, setIsVisibleSearchMenu] = useState(false)
  const [isVisibleAddMenu, setIsVisibleAddMenu] = useState(false)

  const isVisibleMenu = isVisibleSearchMenu || isVisibleAddMenu
  const isVisibleIcon = !isVisibleMenu

  const setVisible = (feature: string) => {
    switch (feature) {
      case 'add':
        setIsVisibleSearchMenu(false)
        setIsVisibleAddMenu(true)
        break
      case 'search':
        setIsVisibleSearchMenu(true)
        setIsVisibleAddMenu(false)
        break
      default:
        setIsVisibleSearchMenu(false)
        setIsVisibleAddMenu(false)
    }
  }

  return (
    <React.Fragment>
      <Navbar>{isVisibleSearchMenu && 'SearchMenu'}</Navbar>
      <Navbar>{isVisibleAddMenu && 'AddMenu'}</Navbar>
      <Navbar.Collapse className="justify-content-end">
        {isVisibleIcon && (
          <h4>
            <BsSearch color="white" onClick={() => setVisible('search')} />{' '}
            <BsFillPlusSquareFill color="white" onClick={() => setVisible('add')} />
          </h4>
        )}
      </Navbar.Collapse>
    </React.Fragment>
  )
}
