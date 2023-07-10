// TODO: fix types

interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  // const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  // return data as LukeSkywalker;
  return data.sdfsdfsdf;
};

export const fetchLukeSkywalkerSecond = async (): Promise<LukeSkywalker> => {
  // const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
  const response = await fetch("https://swapi.dev/api/people/1");
  // const data = await response.json();

  // return data as LukeSkywalker;
  return await response.json();
};
