
//Import global page structure elements
import Header from '../../components/Header';
import PrimarySearchAppBar from '../../components/AppBar';


//Import components React, Material UI
import Link from 'next/link';
import Button from '@mui/material/Button';

//Import Robot Google Fonts - default for Material UI 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




export default function Home() {
  return (
    <main>
      <div>
        {/* <Header /> */}
        <PrimarySearchAppBar />

      </div>
      <div>
        <p>Chandler's portfolio:</p>
        <Link href="/user/portfolio">
          <Button >Click me</Button>
        </Link>
      </div>
    </main>

  )
}
