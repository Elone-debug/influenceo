import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import emailjs from '@emailjs/browser';

export function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    message: '',
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'Instagram Marketing',
    'Facebook Marketing',
    'YouTube Content',
    'Video Editing',
    'Google Ads',
    'Content Creation',
    'Full Package',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS Configuration
      const serviceId = 'service_influenceo';
      const templateId = 'template_k2z277g';
      const publicKey = '44-sSUXd1Pvklkino';
      
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company_name: formData.companyName,
        services: formData.services.length > 0 ? formData.services.join(', ') : 'None selected',
        message: formData.message,
        to_email: 'Influenceo26@gmail.com',
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success('Thank you for your enquiry! We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        message: '',
        services: [],
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Sorry, there was an error sending your message. Please email us directly at Influenceo26@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a7b7d] to-[#0d5456] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">Let's Talk</h1>
            <p className="text-xl text-white/90">
              Ready to take your brand's digital presence to the next level? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a7b7d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#1a7b7d]" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-gray-600">Influenceo26@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a7b7d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#1a7b7d]" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Phone</h3>
                    <p className="text-gray-600">+91 6238011212</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a7b7d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1a7b7d]" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1">Office</h3>
                    <p className="text-gray-600">Influenco, Vazhavelil<br />Thazathangadi, Kottayam</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#1a7b7d]/10 rounded-xl">
                <h3 className="mb-3">Response Time</h3>
                <p className="text-gray-600">
                  We typically respond to all enquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Your Company Name"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Services You're Interested In</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-lg border-2 transition-colors text-sm ${
                            formData.services.includes(service)
                              ? 'bg-[#1a7b7d] text-white border-[#1a7b7d]'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-[#1a7b7d]'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your company and goals *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your company, your target audience, and what you'd like to achieve with digital marketing..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1a7b7d] text-white px-8 py-3 rounded-lg hover:bg-[#156567] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-xl mb-2">How long does it take to see results?</h3>
              <p className="text-gray-600">
                Most clients start seeing increased engagement within 2-4 weeks. Significant growth in brand awareness and conversions typically occurs within 2-3 months of consistent effort.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl mb-2">Do you require a long-term contract?</h3>
              <p className="text-gray-600">
                We offer flexible month-to-month plans. However, we recommend a minimum 3-month commitment to see meaningful results from digital marketing efforts.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl mb-2">Can I see examples of your work?</h3>
              <p className="text-gray-600">
                Absolutely! During our initial consultation, we'll share case studies and examples from similar businesses we've worked with, along with the results they achieved.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl mb-2">What if I already have social media accounts?</h3>
              <p className="text-gray-600">
                Perfect! We can work with your existing accounts, optimize them, and build on what you've already started. We'll conduct an audit and create a growth strategy.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl mb-2">Do you offer video editing services separately?</h3>
              <p className="text-gray-600">
                Yes! We offer standalone video editing services as well as part of our comprehensive packages. Whether you need one-off edits or ongoing video production, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
