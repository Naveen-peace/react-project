import { ToastContainer } from 'react-toastify'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Layout