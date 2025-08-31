import AccountPage from "../../components/AccountPage/AccountPage.jsx";

function Users() {
    return (
        <>
            <main className={"main__account"}>
                <AccountPage showSubscribeButton={true} />
                <main className={"main-container"}>
                    <div className={"main-video-container"}>

                    </div>
                </main>
            </main>
        </>
    )
}

export default Users;