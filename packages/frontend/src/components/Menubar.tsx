import React, { useState } from 'react'
import { BsFillPlusSquareFill, BsSearch } from 'react-icons/bs'
import Navbar from 'react-bootstrap/Navbar'
import { FcSearch } from 'react-icons/fc'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { BsFillXCircleFill } from 'react-icons/bs'
import { AiOutlineEnter } from 'react-icons/ai'
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
        break
    }
  }

  return (
    <React.Fragment>
      {isVisibleSearchMenu && (
        <InputGroup>
          <FormControl
            placeholder="Type something for searching"
            aria-label="searching"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">
              <AiOutlineEnter />
            </InputGroup.Text>
          </InputGroup.Append>
          <Button>
            <BsFillXCircleFill onClick={() => setVisible('')} />
          </Button>
        </InputGroup>
      )}
      {isVisibleAddMenu && (
        <InputGroup>
          <FormControl
            placeholder="Paste URL"
            aria-label="Paste URL"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">
              <AiOutlineEnter />
            </InputGroup.Text>
          </InputGroup.Append>
          <Button>
            <BsFillXCircleFill onClick={() => setVisible('')} />
          </Button>
        </InputGroup>
      )}
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
