import React, { useState, useEffect } from 'react';
import LearnPassage from '../components/LearnPassage';
import financialEducationCourse from '../assets/learn/CoreCirriculum';

const Learn = () => {
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [currentLessonData, setCurrentLessonData] = useState(null);
    const [tocExpanded, setTocExpanded] = useState({});

    useEffect(() => {
        if (financialEducationCourse.chapters && 
            financialEducationCourse.chapters.length > 0 && 
            financialEducationCourse.chapters[0].lessons && 
            financialEducationCourse.chapters[0].lessons.length > 0) {
            
            setCurrentLessonData(financialEducationCourse.chapters[0].lessons[0]);
            
            // Initialize expanded state for the current chapter
            const initialExpanded = {};
            initialExpanded[0] = true;
            setTocExpanded(initialExpanded);
        }
    }, []);

    const handleNextLesson = () => {
        const chapters = financialEducationCourse.chapters;
        let nextChapterIndex = currentChapterIndex;
        let nextLessonIndex = currentLessonIndex + 1;

        if (nextLessonIndex >= chapters[currentChapterIndex].lessons.length) {
            nextLessonIndex = 0;
            nextChapterIndex += 1;
        }

        if (nextChapterIndex >= chapters.length) {
            alert("Congratulations! You've completed the entire course!");
            nextChapterIndex = 0;
            nextLessonIndex = 0;
        }

        setCurrentLessonData(null);
        
        setTimeout(() => {
            setCurrentChapterIndex(nextChapterIndex);
            setCurrentLessonIndex(nextLessonIndex);
            setCurrentLessonData(chapters[nextChapterIndex].lessons[nextLessonIndex]);
            
            // Expand the current chapter in the TOC
            const newExpanded = { ...tocExpanded };
            newExpanded[nextChapterIndex] = true;
            setTocExpanded(newExpanded);
            
            window.scrollTo(0, 0);
        }, 50);
    };

    const navigateToLesson = (chapterIndex, lessonIndex) => {
        if (chapterIndex === currentChapterIndex && lessonIndex === currentLessonIndex) {
            return; // Already on this lesson
        }
        
        setCurrentLessonData(null);
        
        setTimeout(() => {
            setCurrentChapterIndex(chapterIndex);
            setCurrentLessonIndex(lessonIndex);
            setCurrentLessonData(financialEducationCourse.chapters[chapterIndex].lessons[lessonIndex]);
            window.scrollTo(0, 0);
        }, 50);
    };

    const toggleChapter = (chapterIndex) => {
        const newExpanded = { ...tocExpanded };
        newExpanded[chapterIndex] = !newExpanded[chapterIndex];
        setTocExpanded(newExpanded);
    };

    if (!currentLessonData) {
        return <div className="p-4 flex justify-center text-amber-400">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-900 py-8 px-4">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
                {/* Table of Contents - Left Side */}
                <div className="md:w-1/4">
                    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700 p-4 sticky top-4">
                        <h2 className="text-lg font-bold text-amber-400 border-b border-gray-700 pb-2 mb-3">
                            Course Contents
                        </h2>
                        <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                            {financialEducationCourse.chapters.map((chapter, chapterIdx) => (
                                <div key={`chapter-${chapterIdx}`} className="mb-2">
                                    <div 
                                        className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-colors ${
                                            chapterIdx === currentChapterIndex 
                                                ? 'bg-gray-700' 
                                                : 'hover:bg-gray-750'
                                        }`}
                                        onClick={() => toggleChapter(chapterIdx)}
                                    >
                                        <span className={`font-medium ${
                                            chapterIdx === currentChapterIndex ? 'text-amber-300' : 'text-gray-300'
                                        }`}>
                                            {chapterIdx + 1}. {chapter.title}
                                        </span>
                                        <svg 
                                            className={`w-4 h-4 text-gray-400 transform transition-transform ${
                                                tocExpanded[chapterIdx] ? 'rotate-180' : ''
                                            }`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    {tocExpanded[chapterIdx] && (
                                        <div className="ml-4 mt-1 space-y-1">
                                            {chapter.lessons.map((lesson, lessonIdx) => (
                                                <div 
                                                    key={`lesson-${chapterIdx}-${lessonIdx}`}
                                                    className={`p-2 cursor-pointer rounded-lg text-sm ${
                                                        chapterIdx === currentChapterIndex && lessonIdx === currentLessonIndex
                                                            ? 'bg-amber-500/20 text-amber-300 font-medium'
                                                            : 'text-gray-400 hover:bg-gray-700'
                                                    }`}
                                                    onClick={() => navigateToLesson(chapterIdx, lessonIdx)}
                                                >
                                                    {lessonIdx + 1}. {lesson.title}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content - Right Side */}
                <div className="md:w-3/4">
                    <div className="mb-4 text-sm text-gray-400">
                        Chapter {currentChapterIndex + 1}: {financialEducationCourse.chapters[currentChapterIndex].title} 
                        &nbsp;&gt;&nbsp;
                        Lesson {currentLessonIndex + 1}: {currentLessonData.title}
                    </div>
                    
                    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700 p-6">
                        <LearnPassage 
                            title={currentLessonData.title} 
                            subpassages={currentLessonData.subpassages}
                            images={[]} // Remove images from main content
                        />
                        
                        <div className="mt-12 mb-8 pt-4 border-t border-gray-700">
                            <div className="flex justify-between mb-4">
                                <button 
                                    onClick={() => {
                                        const prevLessonIndex = currentLessonIndex - 1;
                                        const prevChapterIndex = currentChapterIndex;
                                        
                                        setCurrentLessonData(null);
                                        
                                        setTimeout(() => {
                                            if (prevLessonIndex >= 0) {
                                                setCurrentLessonIndex(prevLessonIndex);
                                                setCurrentLessonData(financialEducationCourse.chapters[prevChapterIndex].lessons[prevLessonIndex]);
                                            } else if (prevChapterIndex > 0) {
                                                const newChapterIndex = prevChapterIndex - 1;
                                                const newLessonIndex = financialEducationCourse.chapters[newChapterIndex].lessons.length - 1;
                                                
                                                setCurrentChapterIndex(newChapterIndex);
                                                setCurrentLessonIndex(newLessonIndex);
                                                setCurrentLessonData(financialEducationCourse.chapters[newChapterIndex].lessons[newLessonIndex]);
                                                
                                                // Expand the current chapter in the TOC
                                                const newExpanded = { ...tocExpanded };
                                                newExpanded[newChapterIndex] = true;
                                                setTocExpanded(newExpanded);
                                            }
                                            
                                            window.scrollTo(0, 0);
                                        }, 50);
                                    }}
                                    className="px-4 py-2 bg-gray-700 text-amber-300 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                                    disabled={currentChapterIndex === 0 && currentLessonIndex === 0}
                                >
                                    Previous
                                </button>
                                
                                <button 
                                    onClick={handleNextLesson}
                                    className="px-4 py-2 bg-amber-500 text-gray-900 font-medium rounded-lg shadow hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                                >
                                    Next Lesson
                                </button>
                            </div>
                            
                            <div>
                                <div className="text-sm text-gray-400 text-center mb-2">
                                    {getCurrentLessonNumber()} of {getTotalLessons()} lessons
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                    <div 
                                        className="bg-amber-500 h-2.5 rounded-full" 
                                        style={{ width: `${(getCurrentLessonNumber() / getTotalLessons()) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function getCurrentLessonNumber() {
        let lessonCount = 0;
        
        for (let i = 0; i < currentChapterIndex; i++) {
            lessonCount += financialEducationCourse.chapters[i].lessons.length;
        }
        
        return lessonCount + currentLessonIndex + 1;
    }

    function getTotalLessons() {
        return financialEducationCourse.chapters.reduce((total, chapter) => {
            return total + chapter.lessons.length;
        }, 0);
    }
};

export default Learn;