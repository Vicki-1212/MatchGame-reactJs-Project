import './index.css'

const TabItem = props => {
  const {tabList, updateActivetab, isActive} = props
  const {tabId, displayText} = tabList

  const onclickTabItem = () => {
    updateActivetab(tabId)
  }

  const hoverTab = isActive ? 'hover' : ''
  return (
    <li className="tab-list-items" key={tabId}>
      <button
        className={`button ${hoverTab}`}
        type="button"
        onClick={onclickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
