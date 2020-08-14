import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMainBanner } from "../../store/modules/movie";
import * as S from "./MainBanner.style";

function MainBanner({ type }) {
  const dispatch = useDispatch();
  const { result: mainMovie } = useSelector((state) => state.movie.mainBanner);
  const history = useHistory();

  useEffect(() => {
    dispatch(getMainBanner(type));
  }, [type]);

  return (
    <React.Fragment>
      <S.MainBanner image={mainMovie.backdrop_path}>
        <div className="player"></div>
        <S.BannerCover />
        <S.MovieDetail>
          <h2>{mainMovie.title}</h2>
          <p>{mainMovie.tagline}</p>
          <S.MoreBtn //
            onClick={() => history.push(`/movie/${mainMovie.id}`)}
          >
            자세히 보기
          </S.MoreBtn>
        </S.MovieDetail>
      </S.MainBanner>
    </React.Fragment>
  );
}

export default React.memo(MainBanner);
