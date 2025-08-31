import Video from "../../components/Video/Video.jsx";
import AccountPage from "../../components/AccountPage/AccountPage.jsx";

function Account() {
    return (
        <>
            <main className={"main__account"}>
                <AccountPage/>
                <main className={"main-container"}>
                    <div className={"main-video-container"}>
                        <Video/>
                    </div>
                </main>
            </main>
        </>
    )
}

export default Account