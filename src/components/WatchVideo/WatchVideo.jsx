function WatchVideo() {
    return (
        <div className={"video-container"}>
            <div className="video-wrapper">
                <iframe
                    className="video-watch"
                    src=""
                    allowFullScreen
                    title="Video player"
                ></iframe>
            </div>
            <h2>Название видео</h2>
        </div>
    );
}

export default WatchVideo;