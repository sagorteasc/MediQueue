import { Spinner } from '@heroui/react';

const Loading = () => {
    return (
        <div className="flex justify-center h-screen items-center gap-4">
            <Spinner />
        </div>
    );
};

export default Loading;