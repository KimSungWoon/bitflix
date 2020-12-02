import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  // 생성자에서 할일
  // 영화 상세 페이지를 표현해야 하는지 설정한다.

  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovies: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    // id 가지고 오기 -> match.params
    // 만약에 ID가 안들어 오면 Home으로 강제 이동 -> history의 push가 해준다.
    // 사용자의 요청을 서버가 받고, 재요청 하도록 하는것 : redirect라고 함.
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const parsedId = parseInt(id);

    // 올바르지 않은 id라면
    if (isNaN(parsedId)) {
      // Home으로 redirect
      return push("/");
    }

    const { isMovie } = this.state;
    let result = null;

    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch (error) {
      this.setState({
        error: "아무것도 찾을 수가 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  // 함수형 컴포넌트에서 return에 해당한다.
  render() {
    const { result, error, loading } = this.state;

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
