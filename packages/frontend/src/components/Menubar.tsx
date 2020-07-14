import React, { useState, Dispatch, useRef, createRef } from 'react'
import { BsFillPlusSquareFill, BsSearch } from 'react-icons/bs'
import Navbar from 'react-bootstrap/Navbar'
import { FcSearch } from 'react-icons/fc'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { BsFillXCircleFill } from 'react-icons/bs'
import { AiOutlineEnter } from 'react-icons/ai'
import Nav from 'react-bootstrap/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'src/reducers/rootReducers'
import { UrlActions } from 'src/actions/urlActions'

export interface IMenubarProps {}

export default function Menubar(props: IMenubarProps) {
  const { url } = useSelector((state: AppState) => state.url)
  const urlDispatch = useDispatch<Dispatch<UrlActions>>()

  const handleRegister = (bookmarkUrl: string) => {
    urlDispatch({ type: 'URL/REGISTER', payload: { url: bookmarkUrl } })
  }

  const inputEl = useRef<HTMLInputElement & FormControl>(null)

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
            ref={inputEl}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">
              <AiOutlineEnter />
            </InputGroup.Text>
          </InputGroup.Append>
          <Button>
            <BsFillXCircleFill
              onClick={() => {
                setVisible('')
              }}
            />
          </Button>
        </InputGroup>
      )}
      {isVisibleAddMenu && (
        <InputGroup>
          <FormControl
            placeholder="Paste URL"
            aria-label="Paste URL"
            aria-describedby="basic-addon2"
            ref={inputEl}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">
              <AiOutlineEnter
                onClick={() => {
                  if (inputEl.current && inputEl.current.value) {
                    const bookmarkUrl = inputEl.current && inputEl.current.value
                    handleRegister(bookmarkUrl)
                    inputEl.current.value = ''
                  }
                }}
              />
            </InputGroup.Text>
          </InputGroup.Append>
          <Button>
            <BsFillXCircleFill
              onClick={() => {
                setVisible('')
              }}
            />
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
