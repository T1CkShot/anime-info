import { PUBLIC_ANILIST_API_URL } from '$env/static/public';
export const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  const query = `{
  Page(page: 1, perPage: 12) {
    media(type:ANIME,sort:POPULARITY_DESC) {
      id
      title {
        english
      }
      averageScore
      coverImage {
        large
      }
    }
  }
}
`;
  const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
        })
    };
  try {
  const res = await fetch(PUBLIC_ANILIST_API_URL,options);
    const data = await res.json();
    const animeData = data.data.Page;
    return {animeData};
  } catch (e) {
  console.log(e);
  }

}
