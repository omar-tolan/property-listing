import { ListingProps } from "@/ui/listings/listings-container";
import { formatPrice } from "@/utils/format-price";
import {
  Wallet,
  Calendar,
  Coins,
  PhoneCall,
  MessageCircle,
  MapPin,
  Home,
  Clock
} from "lucide-react";
import Finishing from "../listings/components/finishing";

export default function PropertyDetails({
  property,
}: {
  property: ListingProps;
}) {
  const monthlyPay = formatPrice(
    ((property.paymentPlan.installment / 100) * property.price) / 60
  );
  const downPayment = formatPrice(
    (property.paymentPlan.downPayment / 100) * property.price
  );

  return (
    <div className="flex flex-col space-y-8">
      {/* Property Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1 space-y-4">
          {/* Type and Finishing Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              <Home size={16} />
              <span className="text-sm font-medium">{property.type}</span>
            </div>
            <Finishing finishing={property.finishing} />
          </div>

          {/* Title and Location */}
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">{property.title}</h1>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={16} className="text-primary" />
              <span>{property.location.title}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/60 leading-relaxed max-w-2xl">
            {property.description}
          </p>

          {/* Compound Info */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
              <Home className="text-primary" size={16} />
              <span className="text-white/80">{property.compound.name}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
              <Clock className="text-primary" size={16} />
              <span className="text-white/80">
                Launch: {new Date(property.compound.launchDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-colors">
            <PhoneCall size={20} />
            <span>Call</span>
          </button>
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors">
            <MessageCircle size={20} />
            <span>Message</span>
          </button>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Wallet className="text-primary" size={24} />
            <span className="text-white/70">Total Price</span>
          </div>
          <div className="text-3xl font-bold text-white">
            {formatPrice(property.price)}{" "}
            <span className="text-primary">EGP</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-primary" size={20} />
              <span className="text-white/70">Monthly Payment</span>
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold text-white">
                {monthlyPay} <span className="text-primary">EGP</span>
              </div>
              <div className="text-sm text-white/50 mt-1">
                Over 5 Years ({property.paymentPlan.installment}% Monthly)
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="text-primary" size={20} />
              <span className="text-white/70">Down Payment</span>
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold text-white">
                {downPayment} <span className="text-primary">EGP</span>
              </div>
              <div className="text-sm text-white/50 mt-1">
                {property.paymentPlan.downPayment}% of Total Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
