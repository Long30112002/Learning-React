import React, { createContext, useContext, useState, type ReactNode} from 'react';

interface Workspace {
    id: string;
    name: string;
    domain: string;
    plan: 'free' | 'pro' | 'enterprise';
    role: 'ADMIN' | 'USER' | 'MODERATOR'; // Role của user trong workspace này
}

interface WorkspaceContextType {
    currentWorkspace: Workspace | null;
    workspaces: Workspace[]; // Tất cả workspace user có thể truy cập
    switchWorkspace: (workspaceId: string) => void;
    isLoading: boolean;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export const WorkspaceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentWorkspace, setCurrentWorkspace] = useState<Workspace | null>(null);
    const [workspaces, _setWorkspaces] = useState<Workspace[]>([
        // Dữ liệu mẫu - sau này lấy từ API
        { id: '1', name: 'Acme Corp', domain: 'acme', plan: 'pro', role: 'ADMIN' },
        { id: '2', name: 'Personal Project', domain: 'personal', plan: 'free', role: 'USER' },
        { id: '3', name: 'Client Project', domain: 'client', plan: 'enterprise', role: 'MODERATOR' },
    ]);
    const [isLoading, _setIsLoading] = useState(false);

    const switchWorkspace = (workspaceId: string) => {
        const workspace = workspaces.find(w => w.id === workspaceId);
        if (workspace) {
            setCurrentWorkspace(workspace);
            // Lưu vào localStorage hoặc cookie
            localStorage.setItem('currentWorkspaceId', workspaceId);
        }
    };

    // Load workspace từ localStorage khi khởi động
    React.useEffect(() => {
        const savedWorkspaceId = localStorage.getItem('currentWorkspaceId');
        if (savedWorkspaceId) {
            const workspace = workspaces.find(w => w.id === savedWorkspaceId);
            if (workspace) {
                setCurrentWorkspace(workspace);
            }
        }
    }, []);

    return (
        <WorkspaceContext.Provider value={{
            currentWorkspace,
            workspaces,
            switchWorkspace,
            isLoading
        }}>
            {children}
        </WorkspaceContext.Provider>
    );
};

export const useWorkspace = () => {
    const context = useContext(WorkspaceContext);
    if (!context) {
        throw new Error('useWorkspace must be used within WorkspaceProvider');
    }
    return context;
};