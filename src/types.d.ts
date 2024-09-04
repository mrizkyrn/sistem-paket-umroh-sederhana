
export type VendorKey = 'MKM' | 'ALH';

export interface FormData {
  periode: string;
  berangkat: string;
  vendorHotel: VendorKey | '';
  jumlahPax: number;
  pesawat: string;
  madinah: string;
  hariMadinah: number;
  makkah: string;
  hariMakkah: number;
  visaBus: string;
  transportasi: string;
  muthawwif: string;
  handlingSaudi: string;
  domestik: string;
  siskopatuh: string;
  perlengkapan: string;
  wisataPlus: string;
  manasik: string;
  tourLeader: number;
  margin: number;
}
