import { Card } from '@heroui/react';
import { ClockFill, MathUnionShape, Calendar } from '@gravity-ui/icons';

const LearningTips = () => {
    return (
        <div className="container mx-auto p-6 md:p-16">

            <h1 className="text-3xl text-center font-bold text-[#1A146B] mb-10">
                Fuel Your Learning Momentum
            </h1>

            <div className="grid grid-cols-12 gap-6">

                {/* 8 column */}
                <div className="col-span-12 md:col-span-8 ">
                    <Card className="bg-[#D3E4FE] p-5 h-full ">
                        <Card.Header className="flex items-start gap-4 space-y-3">
                            <ClockFill className="text-3xl text-[#1A146B]" />

                            <div>
                                <Card.Title className="text-2xl font-semibold text-[#1A146B]">
                                    The Pomodoro Technique
                                </Card.Title>
                                <Card.Description className="text-gray-600 mt-2 w-100">
                                    Maximize your focus by learning in 25-minute bursts
                                    followed by a 5-minute break.
                                </Card.Description>
                            </div>
                        </Card.Header>
                    </Card>
                </div>

                {/* 4 column */}
                <div className="col-span-12 md:col-span-4">
                    <Card className="bg-[#86F2E4] p-5 h-full">
                        <Card.Header className="flex items-start gap-4">
                            <MathUnionShape className="text-3xl text-[#006A61]" />
                            <div>
                                <Card.Title className="text-2xl font-semibold text-[#006F66]">Active Recall</Card.Title>
                                <Card.Description className="text-[#006F66] mt-2 w-100">
                                    Test yourself instead of rereading notes.
                                </Card.Description>
                            </div>
                        </Card.Header>
                    </Card>
                </div>

                {/* 4 column */}
                <div className="col-span-12 md:col-span-4">
                    <Card className="bg-[#FFDBCA] p-5 h-full">
                        <Card.Header className="flex items-start gap-4">
                            <Calendar className="text-3xl text-[#341100]" />
                            <div>
                                <Card.Title className="text-2xl font-semibold text-[#341100]">Micro-Learning</Card.Title>
                                <Card.Description className="text-[#341100] mt-2 w-100">
                                    Review topics over increasing intervals.
                                </Card.Description>
                            </div>
                        </Card.Header>
                    </Card>
                </div>

                {/* 8 column */}
                <div className="col-span-12 md:col-span-8">
                    <Card className="bg-[#D3E4FE] p-5 h-full">
                        <Card.Header className="flex items-start gap-4">
                            <ClockFill className="text-3xl text-blue-600" />
                            <div>
                                <Card.Title className="text-2xl font-semibold text-[#1A146B]">Space for Growth</Card.Title>
                                <Card.Description className='text-[#1A146B] mt-2'>
                                    Create a dedicated study environment free from distractions. A clean desk
                                    reflects a clean mind, ready to absorb new information.
                                </Card.Description>
                            </div>
                        </Card.Header>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default LearningTips;