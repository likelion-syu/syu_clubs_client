
// 일정 인스턴스의 타입, 유니온 타입 사용가능
export interface IEvent {
    club_event_id:   number;
    created_at:      Date | null;
    updated_at:      Date | null;
    club_event_name: string;
    club_event_dt:   Date | null;
    club:            number;
}