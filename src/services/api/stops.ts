import { client } from '.';
import { Stop } from '@/interfaces';

export const fetchAllStops = async () => {
  try{
    const { data } = await client.get('/stops');
    return data as Stop[]
  } catch (e: unknown) {
    console.error(e);
  }
}
