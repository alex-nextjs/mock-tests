'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ModalHeader } from './ModalHeader';
import { CourseSupport } from './CourseSupport';
import { UpdatesAnnouncements } from './UpdatesAnnouncements';
import { ModalFooter } from './ModalFooter';
import { closeInfoCourseModal } from '@/store/slices/infoModalSlice';

export function CourseInfoModal() {
  const isOpen = useSelector((state: RootState) => state.infoModal.isOpen);
  const dispatch = useDispatch<AppDispatch>();

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(isOpen) => {
        if (!isOpen) dispatch(closeInfoCourseModal());
      }}
    >
      <DialogContent className="sm:max-w-[800px] p-0">
        <div className="flex flex-col h-full p-6">
          <ModalHeader />
          <div className="flex flex-col md:flex-row gap-6 my-6">
            <UpdatesAnnouncements />
            <CourseSupport />
          </div>
          <ModalFooter />
        </div>
      </DialogContent>
    </Dialog>
  );
}
