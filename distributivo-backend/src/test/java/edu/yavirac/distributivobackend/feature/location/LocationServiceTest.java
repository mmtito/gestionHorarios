package edu.yavirac.distributivobackend.feature.location;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class LocationServiceTest {

    @InjectMocks LocationService locationService;
    @Mock LocationRepository locationRepository;

    @BeforeEach
    void setup(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindAllPageable() {
        assertNotNull(locationService.findAllPageable(10, 0));
        assertTrue(locationService.findAllPageable(10, 0).getCapacity() == 10);
    }
}
