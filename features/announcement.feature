Feature: Announcement
    Scenario: Neighbour is within range
        Given Ushindi lives 15 metres from Jules
        When Jules shouts "My restruant is now open for business"
        Then Ushindi hears Jules announcement
