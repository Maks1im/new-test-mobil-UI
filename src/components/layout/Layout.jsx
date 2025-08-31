import Header from "../Header/Header.jsx";
import MenuMobile from "../MenuMobile/MenuMobile.jsx";
import MenuDesktop from "../MenuDesktop/MenuDesktop.jsx";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="main-container">
                <MenuDesktop />
                <div className="content-wrapper" style={{flex: 1}}>
                    {children}
                </div>
            </main>
            <MenuMobile />
        </>
    );
}

export default Layout;