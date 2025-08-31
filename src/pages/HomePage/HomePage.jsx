import Video from "../../components/Video/Video.jsx";

function HomePage() {
    return (
        <>
            <main className={"main-container"}>
                <div className={"main-video-container"}>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                </div>
            </main>
        </>
    )
}

export default HomePage;