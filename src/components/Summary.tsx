import React from 'react';
import { FormData } from '../types';
import calculationPrices from '../utils/calculationPrices';

interface SummaryProps {
  formData: FormData;
  onSubmit: () => void;
  onCancel: () => void;
}

const Summary: React.FC<SummaryProps> = ({ formData, onSubmit, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-md w-[600px] h-[600px] overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">Ringkasan</h1>
        <div className="flex justify-between mb-2">
          <p>Periode</p>
          <p>{formData.periode}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Berangkat dari</p>
          <p>{formData.berangkat}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Vendor Hotel</p>
          <p>{formData.vendorHotel}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Jumlah Pax</p>
          <p>{formData.jumlahPax}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Pesawat</p>
          <p>{formData.pesawat}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Madinah</p>
          <p>{formData.madinah}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Hari Madinah</p>
          <p>{formData.hariMadinah}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Makkah</p>
          <p>{formData.makkah}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Hari Makkah</p>
          <p>{formData.hariMakkah}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Visa Bus</p>
          <p>{formData.visaBus}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Transportasi</p>
          <p>{formData.transportasi}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Muthawwif</p>
          <p>{formData.muthawwif}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Handling Saudi</p>
          <p>{formData.handlingSaudi}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Domestik</p>
          <p>{formData.domestik}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Siskopatuh</p>
          <p>{formData.siskopatuh}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Perlengkapan</p>
          <p>{formData.perlengkapan}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Wisata Plus</p>
          <p>{formData.wisataPlus}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Manasik</p>
          <p>{formData.manasik}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Tour Leader</p>
          <p>{formData.tourLeader}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Margin</p>
          <p>{formData.margin}</p>
        </div>

        <h1 className="text-xl font-semibold mt-4 mb-2">Rincian Harga</h1>
        <div className="flex justify-between mb-2">
          <p>Pesawat</p>
          <p>Rp{calculationPrices(formData).pesawatPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Madinah</p>
          <p>Rp{calculationPrices(formData).madinahPrices.toLocaleString()} &nbsp; x &nbsp; {formData.hariMadinah} &nbsp; Rp{calculationPrices(formData).madinahTotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Makkah</p>
          <p>Rp{calculationPrices(formData).makkahPrices.toLocaleString()} &nbsp; x &nbsp; {formData.hariMakkah} &nbsp; Rp{calculationPrices(formData).makkahTotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Visa Bus</p>
          <p>Rp{calculationPrices(formData).visaBusPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Muthawwif</p>
          <p>Rp{calculationPrices(formData).muthawwifPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Hotel Muthawwif</p>
          <p>Rp{calculationPrices(formData).hotelMuthawwifPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Handling Saudi</p>
          <p>Rp{calculationPrices(formData).handlingSaudiPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Domestik</p>
          <p>Rp{calculationPrices(formData).domestikPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Siskopatuh</p>
          <p>Rp{calculationPrices(formData).siskopatuhPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Perlengkapan</p>
          <p>Rp{calculationPrices(formData).perlengkapanPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Wisata Plus</p>
          <p>Rp{calculationPrices(formData).wisataPlusPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Manasik</p>
          <p>Rp{calculationPrices(formData).manasikPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Tour Leader</p>
          <p>Rp{calculationPrices(formData).tourLeaderPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Margin</p>
          <p>Rp{calculationPrices(formData).marginPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Total</p>
          <p>Rp{calculationPrices(formData).totalPrice.toLocaleString()}</p>
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded-md">
            Batal
          </button>
          <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
