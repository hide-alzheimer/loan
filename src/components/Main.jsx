export default function Main(props) {
  return ( 
    <div className="main">
      {props.children}
      <div className="container">
        <div className="tab-container">
          <ul className="tabmenu">
            <li><a href="#">Yearly</a></li>
            <li><a href="#">Monthly</a></li>
            <li><a href="#">Weekly</a></li>
          </ul>
          <div className="netwage">
            <ul className="wage">
              <li><a href="#">Net Wage</a></li>
              <li><a href="#">GBP</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}