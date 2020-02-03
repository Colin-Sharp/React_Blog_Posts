import crowdcomms from "../api/crowdcomms";

export const fetchSpeaker = () => async dispatch => {
  const response = await crowdcomms.get("/posts?userId=1");

  dispatch({ type: "FETCH_SPEAKER", payload: response.data });
};
