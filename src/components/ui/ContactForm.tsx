import React, { useState } from 'react';
import { Button } from './Button';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream p-12 text-center">
        <h3 className="heading-md text-charcoal mb-4">Thank You</h3>
        <p className="font-body text-muted mb-8">
          We have received your enquiry. Our team will get back to you shortly.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-sm rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col">
          <label htmlFor="name" className="label-text text-muted mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            required
            className="border-b border-border bg-transparent py-3 text-charcoal font-body focus:outline-none focus:border-gold transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="label-text text-muted mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            required
            className="border-b border-border bg-transparent py-3 text-charcoal font-body focus:outline-none focus:border-gold transition-colors"
            placeholder="+91 00000 00000"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="label-text text-muted mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            required
            className="border-b border-border bg-transparent py-3 text-charcoal font-body focus:outline-none focus:border-gold transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="service" className="label-text text-muted mb-2">Service Required</label>
          <select
            id="service"
            required
            className="border-b border-border bg-transparent py-3 text-charcoal font-body focus:outline-none focus:border-gold transition-colors appearance-none"
          >
            <option value="">Select a service</option>
            <option value="interior">Interior Design</option>
            <option value="exterior">Exterior Design</option>
            <option value="structural">Structural Design</option>
            <option value="construction">Building Construction</option>
            <option value="multiple">Multiple Services</option>
          </select>
        </div>
      </div>
      
      <div className="flex flex-col mb-8">
        <label htmlFor="location" className="label-text text-muted mb-2">Project Location</label>
        <input
          type="text"
          id="location"
          className="border-b border-border bg-transparent py-3 text-charcoal font-body focus:outline-none focus:border-gold transition-colors"
          placeholder="City, State"
        />
      </div>
      
      <div className="flex flex-col mb-10">
        <label htmlFor="message" className="label-text text-muted mb-2">Project Details</label>
        <textarea
          id="message"
          rows={4}
          className="border-b border-border bg-transparent py-3 text-charcoal font-body focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="Tell us about your requirements..."
        ></textarea>
      </div>
      
      <Button type="submit" variant="primary" className="w-full md:w-auto">
        Submit Enquiry
      </Button>
    </form>
  );
}
