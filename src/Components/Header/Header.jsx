import { Link } from '@mui/material';

const Header = () => {
  return(
    <>
      <h1>OUR STORE</h1>
      <lable>
      <h2>Browse our Categories</h2>
      <Link onClick={'Browser'} ELECTRONICS />
      <Link FOOD />
      </lable>
    </>
  )
}
export default Header;