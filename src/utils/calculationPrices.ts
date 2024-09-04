import {
  pesawat,
  madinah,
  makkah,
  visaBus,
  muthawwif,
  handlingSaudi,
  domestik,
  siskopatuh,
  perlengkapan,
  wisataPlus,
  manasik,
} from '../data';
import { FormData, VendorKey } from '../types';

const getSelectedOption = (list: { option: string; price: number }[], option: string) => {
  return list.find((item) => item.option === option) || { price: 0 };
};

const getSelectedHotelPrices = (
  hotelList: { option: string; prices: { D: number; T: number; Q: number } }[],
  option: string
) => {
  const [hotelName, roomType] = option.split('-');
  const hotel = hotelList.find((item) => item.option === hotelName);
  if (!hotel) return 0;
  return hotel.prices[roomType as 'D' | 'T' | 'Q'];
};

const calculateTotalPrice = (formData: FormData) => {
  const pesawatPrice = getSelectedOption(pesawat, formData.pesawat).price;

  const madinahPrices = getSelectedHotelPrices(
    (formData.vendorHotel && madinah[formData.vendorHotel as VendorKey]) || [],
    formData.madinah
  );
  const madinahTotal = madinahPrices * formData.hariMadinah;

  const makkahPrices = getSelectedHotelPrices(
    (formData.vendorHotel && makkah[formData.vendorHotel as VendorKey]) || [],
    formData.makkah
  );
  const makkahTotal = makkahPrices * formData.hariMakkah;

  const visaBusPrice = getSelectedOption(visaBus, formData.visaBus).price;

  const muthawwifPrice = getSelectedOption(muthawwif, formData.muthawwif).price;

  const hotelMuthawwifPrice = formData.jumlahPax > 0 ? (madinahTotal + makkahTotal) / formData.jumlahPax : 0;

  const handlingSaudiPrice = getSelectedOption(handlingSaudi, formData.handlingSaudi).price;

  const domestikPrice = getSelectedOption(domestik, formData.domestik).price;

  const siskopatuhPrice = getSelectedOption(siskopatuh, formData.siskopatuh).price;

  const perlengkapanPrice = getSelectedOption(perlengkapan, formData.perlengkapan).price;

  const wisataPlusPrice = getSelectedOption(wisataPlus, formData.wisataPlus).price;

  const manasikPrice = getSelectedOption(manasik, formData.manasik).price;

  const tourLeaderPrice =
    formData.tourLeader > 0
      ? ((pesawatPrice +
          madinahTotal +
          makkahTotal +
          visaBusPrice +
          muthawwifPrice +
          hotelMuthawwifPrice +
          handlingSaudiPrice +
          domestikPrice +
          siskopatuhPrice +
          perlengkapanPrice +
          wisataPlusPrice +
          manasikPrice) /
        (formData.jumlahPax * formData.tourLeader))
      : 0;

  const marginPrice = formData.margin || 0;

  const totalPrice =
    pesawatPrice +
    madinahTotal +
    makkahTotal +
    visaBusPrice +
    muthawwifPrice +
    hotelMuthawwifPrice +
    handlingSaudiPrice +
    domestikPrice +
    siskopatuhPrice +
    perlengkapanPrice +
    wisataPlusPrice +
    manasikPrice +
    tourLeaderPrice +
    marginPrice;

  return {
    pesawatPrice,
    madinahPrices,
    madinahTotal,
    makkahPrices,
    makkahTotal,
    visaBusPrice,
    muthawwifPrice,
    hotelMuthawwifPrice,
    handlingSaudiPrice,
    domestikPrice,
    siskopatuhPrice,
    perlengkapanPrice,
    wisataPlusPrice,
    manasikPrice,
    tourLeaderPrice,
    marginPrice,
    totalPrice,
  };
};

export default calculateTotalPrice;
