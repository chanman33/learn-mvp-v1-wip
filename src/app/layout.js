import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return <div>{children}</div>;
}