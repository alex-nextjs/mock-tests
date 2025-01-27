import { Mail, AlertCircle } from 'lucide-react';

export function ModalFooter() {
  return (
    <div className="border-t border-teal-200 pt-4 flex justify-between items-center text-sm">
      <a href="#" className="text-teal-600 hover:underline flex items-center">
        <Mail className="mr-2 h-4 w-4" /> Need help? Contact Support
      </a>
      <a href="#" className="text-teal-600 hover:underline flex items-center">
        <AlertCircle className="mr-2 h-4 w-4" /> View Refund Policy
      </a>
    </div>
  );
}
