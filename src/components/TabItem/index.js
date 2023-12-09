import './index.css'

const TabItem = props => {
  const {tabItemDetails, changeState, isActive} = props
  const {id, buttonText} = tabItemDetails
  const buttonColor = isActive === true ? 'isActive' : 'isNoActive'

  const onClickButton = () => {
    changeState(id)
  }

  return (
    <li className="main-list-section">
      <button type="button" className={buttonColor} onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}
export default TabItem
