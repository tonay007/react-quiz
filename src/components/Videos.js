import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useState } from 'react';
import Video from './Video';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';

const Videos = () => {
    const [page, setPage] = useState(1);
    const { loading, videos, error, hasMore } = useVideoList(page);
    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll dataLength={videos.length} hasMore={hasMore} next={() => setPage(page + 8)} loader="Loading...">
                    {videos.map(video => (
                        video.noq > 0
                            ?
                            <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}><Video title={video.title} id={video.youtubeID} noq={video.noq} /></Link>
                            :
                            <Video key={video.youtubeID} title={video.title} id={video.youtubeID} noq={video.noq} />
                    ))}
                </InfiniteScroll>
            )
            }
            {!loading && videos.length === 0 && (
                <div className="">No videos found!</div>
            )}
            {error && <div>An error occurred!</div>}
            {error && <div>Loading...</div>}
        </div>
    );
};

export default Videos;